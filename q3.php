//the function adds tasks to the to-do list
<?php
function addTask($task){
    if(!empty($task)){
        $task = [];
        if(file_exists('task.json')){
            $json = file_get_contents('task.json');
            $task = json_decode($json,true); 
        }
        $task[] = ['task' =>$task,'completed' => false];
    file_put_contents('task.json',json_encode($task,JSON_PRETTY_PRINT));
    }
}
?>