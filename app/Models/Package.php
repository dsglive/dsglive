<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Package extends Model implements HasMedia
{
    use HasMediaTrait, SoftDeletes;

    /**
     * @var array
     */
    protected $casts = [
        'handling_fee'          => 'float',
        'cube'                  => 'float',
        'length'                => 'float',
        'width'                 => 'float',
        'height'                => 'float',
        'damaged'               => 'boolean',
        'delivered'             => 'boolean',
        'repaired'              => 'boolean',
        'invoiced'              => 'boolean',
        'storage_fee'           => 'float',
        'date_delivered'        => 'date:Y-m-d',
        'date_repaired'         => 'date:Y-m-d',
        'date_processed'        => 'date:Y-m-d',
        'date_received'         => 'date:Y-m-d',
        'last_invoice_at'       => 'date:Y-m-d',
        'previous_invoice_date' => 'date:Y-m-d'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'date_delivered',
        'date_repaired',
        'date_processed',
        'date_received',
        'deleted_at',
        'last_invoice_at',
        'previous_invoice_date'
    ];

    /**
     * @var array
     */
    protected $fillable = ['dsg_id', 'customer_id', 'customer_name', 'client_id', 'client_name', 'shipper_id',
        'shipper_name', 'bin_id', 'bin_name', 'description', 'date_received', 'date_processed',
        'po_no', 'style_no', 'length', 'width', 'height', 'cube', 'handling_type', 'handling_fee', 'store_at',
        'storage_fee', 'damaged', 'damage_description', 'repaired', 'date_repaired', 'delivered', 'date_delivered',
        'logistic_id', 'invoiced', 'notes', 'last_invoice_at', 'previous_invoice_date'
    ];

    public static function archived()
    {
        return self::onlyTrashed()->get();
    }

    /**
     * @return mixed
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    /**
     * @return mixed
     */
    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

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
        return $this->belongsTo(Dsg::class, 'dsg_id');
    }

    /**
     * @param $id
     */
    public static function findByPackageID($id)
    {
        return self::withTrashed()
            ->where('id', $id)
            ->first();
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

    /**
     * @return mixed
     */
    public function handlingrate()
    {
        return $this->belongsTo(Rate::class, 'handling_type');
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
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function scopeBillingCyle($query, $from, $to)
    {
        return $query->whereBetween('date_received', [$from, $to]);
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
    public function scopeExceptArchived($query)
    {
        return $query->whereNull('deleted_at');
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeExceptRepaired($query)
    {
        return $query->where('repaired', 0);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeExceptUnknownClient($query)
    {
        return $query->where('client_id', '!=', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeExceptUnknownCustomer($query)
    {
        return $query->where('customer_id', '!=', 1001);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeInStorage($query)
    {
        return $query->whereNull('date_delivered');
    }

    /**
     * @param  $query
     * @param  $id
     * @return mixed
     */
    public function scopeOfClient($query, $id)
    {
        return $query->where('client_id', $id);
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
    public function scopeUnknownClient($query)
    {
        return $query->where('client_id', '!=', 1)->orWhere('client_id', null);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknownCustomer($query)
    {
        return $query->where('customer_id', 1001)->orWhere('customer_id', null);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknownShipper($query)
    {
        return $query->where('shipper_id', 1)->orWhere('shipper_id', null);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeWithNoInvoiceYet($query)
    {
        return $query->where('invoiced', 0);
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
    public function setInvoicedAttribute($value)
    {
        if (empty($value)) {
            $this->attributes['invoiced'] = 0;
        } else {
            $this->attributes['invoiced'] = $value;
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
     * @return mixed
     */
    public function ticket()
    {
        return $this->belongsTo(Logistic::class, 'logistic_id');
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
