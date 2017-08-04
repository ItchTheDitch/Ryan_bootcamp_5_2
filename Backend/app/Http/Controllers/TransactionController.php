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

    public function buyTicket(Request $request){

          DB::beginTransaction();

        try {


      $trans = Transaction::where('ticket_id','=',$ticket_id)->first();

        $ticket_id = $request->input('ticket_id')

    if (!empty($trans)) {

        $t = new Transaction;
        $t->ticket = -1;
        $t->save();
    }

          DB::commit();
          return response()->json($ticket_id,201);
        }

        catch (Exception $e) {
        DB::rollBack();
        return response()->json(["message" => $e->getMessage()],500);
    }
  }
}
