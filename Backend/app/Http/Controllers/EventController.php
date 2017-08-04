<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;



class EventController extends Controller
{
  public function getEvent(Request $request){

      $eventlist = Event::get();

      return response()->json($eventlist,200);

    }

    public function addEvent(Request $request){

        DB::beginTransaction();

        try {

            $name = $request->input('name');
            $price = $request->input('price');
            $date = $request->input('date');
            $ticket = $request->input('ticket');

              $elist = new Event;
              $elist->name = $name;
              $elist->price = $price;
              $elist->date = $date;
              $elist->ticket = $ticket;
              $elist->save();

        $eventlist = Event::get();

          DB::commit();
          return response()->json($eventlist,201);
        }

        catch (Exception $e) {
        DB::rollBack();
        return response()->json(["message" => $e->getMessage()],500);
    }
  }
}
