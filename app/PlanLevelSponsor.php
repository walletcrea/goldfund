<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlanLevelSponsor extends Model
{
    protected $table = 'plan_level_sponsors';

    protected $fillable = [ 'type', 'commission'];

    public $timestamps = false;
}
