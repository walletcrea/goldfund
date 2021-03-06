<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Plan;
use App\Customer;
use App\Deposit;

class Earning extends Model
{
	protected $table = 'earnings';

    protected $fillable = [
    	'cust_id', 'plan_id', 'deposit_id', 'amount', 'status'
    ];

    public function plan()
	{
		return $this->belongsTo(Plan::class, 'plan_id', 'id');
	}

	public function owner()
	{
		return $this->belongsTo(Customer::class, 'cust_id', 'id');
	}

	public function deposit()
	{
		return $this->belongsTo(Deposit::class, 'deposit_id', 'id');
	}
}
