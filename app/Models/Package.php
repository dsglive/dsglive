<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Package extends Model implements HasMedia
{
    use HasMediaTrait;

    /**
     * @var array
     */
    protected $casts = [
        'active'         => 'boolean',
        'handling_fee'   => 'float',
        'cube'           => 'float',
        'length'         => 'float',
        'width'          => 'float',
        'height'         => 'float',
        'damaged'        => 'boolean',
        'delivered'      => 'boolean',
        'repaired'       => 'boolean',
        'storage_fee'    => 'float',
        'date_delivered' => 'datetime:Y-m-d',
        'date_repaired'  => 'datetime:Y-m-d',
        'date_processed' => 'datetime:Y-m-d',
        'date_out'       => 'datetime:Y-m-d',
        'date_received'  => 'datetime:Y-m-d'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'date_delivered',
        'date_repaired',
        'date_processed',
        'date_out',
        'date_received'
    ];

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @param $id
     */
    public static function deleteAllDamagedImages($id)
    {
        $package = self::find($id);
        $package->clearMediaCollection('damaged_images');
    }

    /**
     * @param $id
     */
    public static function deleteAllPackageImages($id)
    {
        $package = self::find($id);
        $package->clearMediaCollection('package_images');
    }

    /**
     * @return mixed
     */
    public function dsg()
    {
        return $this->belongsTo(Dsg::class);
    }

    public function registerMediaCollections()
    {
        $this->addMediaCollection('package_images');

        $this->addMediaCollection('damaged_images');
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeDamaged($query)
    {
        return $query->where('damaged', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeDelivered($query)
    {
        return $query->where('delivered', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeRepaired($query)
    {
        return $query->where('repaired', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUndelivered($query)
    {
        return $query->where('delivered', 0);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknown($query)
    {
        return $query->where('client_id', '==', null);
    }

    /**
     * @param $id
     * @param $key
     * @return mixed
     */
    public static function uploadDamageImage($id, $key)
    {
        $package = self::find($id);
        $package->addMediaFromRequest($key)->preservingOriginal()->toMediaCollection('damaged_images');
        return $package->getMedia('damaged_images')->last()->getFullUrl();
    }

    /**
     * @param $id
     * @param $key
     * @return mixed
     */
    public static function uploadPackageImage($id, $key)
    {
        $package = self::find($id);
        $package->addMediaFromRequest($key)->preservingOriginal()->toMediaCollection('package_images');
        return $package->getMedia('package_images')->last()->getFullUrl();
    }
}
