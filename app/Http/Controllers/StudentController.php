<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Exception;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function create()
    {
        $data=[
            'scope'=>'create'
        ];
        return view('student.create')->with($data);
    }
    public function CreateStudent(Request $request)
    {
        try{

            $student = new Student;
            $student->name=$request->name;
            $student->email=$request->email;
            $student->class=$request->class;
            $student->section=$request->section;
            $student->save();

            return response()->json(['success' => true, 'message' => 'Student created successfully.'], 200);

        }catch(Exception $e){

            return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
        }

    }
}
