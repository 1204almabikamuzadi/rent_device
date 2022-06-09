<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    /**
     * attributes mass assignable
     *
     * @var array
     */
    public $timestamps = false;
    protected $fillable=['name'];
    public function createRole($name){
        return $this->name=$name;
    }
}
