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
    public static function deleteAllDamangeImages($id)
    {
        $package = self::find($id);
        $package->clearMediaCollection('damaged_images');
    }

    /**
     * @param $id
     */
    public static function deleteAllImages($id)
    {
        $package = self::find($id);
        $package->clearMediaCollection('package_images');
    }

    public function registerMediaCollections()
    {
        $this->addMediaCollection('package_images');

        $this->addMediaCollection('damage_images');
    }

    /**
     * @param $id
     * @param $pathToImage
     */
    public static function uploadDamageImage($id, $pathToImage): string
    {
        $package = self::find($id);
        $package->addMedia($pathToImage)->toMediaCollection('damaged_images');
        return $package->getMedia('damaged_images');
    }

    /**
     * @param $id
     * @param $pathToImage
     */
    public static function uploadImage($id, $pathToImage): string
    {
        $package = self::find($id);
        $package->addMedia($pathToImage)->preservingOriginal()->toMediaCollection('package_images');
        return $package->getMedia('package_images');
        // return here the url of the image we upload
    }

    public function dsg()
    {
        return $this->belongsTo(Dsg::class);
    }
}
