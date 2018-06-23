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
        'handling_fee'   => 'float',
        'cube'           => 'float',
        'length'         => 'float',
        'width'          => 'float',
        'height'         => 'float',
        'damaged'        => 'boolean',
        'delivered'      => 'boolean',
        'repaired'       => 'boolean',
        'storage_fee'    => 'float',
        'date_delivered' => 'date:Y-m-d',
        'date_repaired'  => 'date:Y-m-d',
        'date_processed' => 'date:Y-m-d',
        'date_out'       => 'date:Y-m-d',
        'date_received'  => 'date:Y-m-d'
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
    protected $fillable = ['dsg_id', 'customer_id', 'customer_name', 'client_id', 'client_name', 'shipper_id',
        'shipper_name', 'bin_id', 'bin_name', 'description', 'date_received', 'date_out', 'date_processed',
        'po_no', 'style_no', 'length', 'width', 'height', 'cube', 'handling_type', 'handling_fee', 'store_at',
        'storage_fee', 'damaged', 'damage_description', 'repaired', 'date_repaired', 'delivered', 'date_delivered'
    ];

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

    /**
     * @return mixed
     */
    public function getDamagedImages()
    {
        return $this->getMedia('damaged_images')->map(function ($media) {
            return $media->getFullUrl();
        });
    }

    /**
     * @return mixed
     */
    public function getPackageImages()
    {
        return $this->getMedia('package_images')->map(function ($media) {
            return $media->getFullUrl();
        });
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
        return $query->where('dsg_id', '!=', null);
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
     * @param $value
     */
    public function setDamagedAttribute($value)
    {
        if (empty($value)) {
            $this->attributes['damaged'] = 0;
        } else {
            $this->attributes['damaged'] = $value;
        }
    }

    /**
     * @param $value
     */
    public function setDeliveredAttribute($value)
    {
        if (empty($value)) {
            $this->attributes['delivered'] = 0;
        } else {
            $this->attributes['delivered'] = $value;
        }
    }

    /**
     * @param $value
     */
    public function setRepairedAttribute($value)
    {
        if (empty($value)) {
            $this->attributes['repaired'] = 0;
        } else {
            $this->attributes['repaired'] = $value;
        }
    }

    /**
     * @param  $id
     * @param  $key
     * @return mixed
     */
    public static function uploadDamageImage($id, $key)
    {
        $package = self::find($id);
        $package->addMediaFromRequest($key)->preservingOriginal()->toMediaCollection('damaged_images');
        return $package->getMedia('damaged_images')->last()->getFullUrl();
    }

    /**
     * @param  $id
     * @param  $key
     * @return mixed
     */
    public static function uploadPackageImage($id, $key)
    {
        $package = self::find($id);
        $package->addMediaFromRequest($key)->preservingOriginal()->toMediaCollection('package_images');
        return $package->getMedia('package_images')->last()->getFullUrl();
    }
}
