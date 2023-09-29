<?php
$studentScores = [
    'Alice' => 85,
    'julie' => 75,
    'mary' => 45,
    'prince' => 95,
];
$totalScores = array_sum($studentScores);
$numStudents = count($studentScores);
$averageScore = $totalScores / $numStudents;
echo "$averageScore";
echo "$totalScore";
echo "$numStudents";
?>