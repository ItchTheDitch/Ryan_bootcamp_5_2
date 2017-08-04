<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
  public function getTransaction(Request $request){

      $transactionlist = Transaction::get();

      return response()->json($transactionlist,200);

    }

    public function buy(){

          DB::beginTransaction();

        try {

            $eventid = $request->input('event_id');
            $price = $request->input('price');
            $date = $request->input('date');
            $ticket = $request->input('ticket');

              $elist = new Transaction;
              $elist->name = $name;
              $elist->price = $price;
              $elist->date = $date;
              $elist->ticket = $ticket;
              $elist->save();

        $transactionlist = Transaction::get();

          DB::commit();
          return response()->json($transactionlist,201);
        }

        catch (Exception $e) {
        DB::rollBack();
        return response()->json(["message" => $e->getMessage()],500);
    }
  }
}
