<?php
class BankAccount{
    private $accountNumber;
    private $accountHolder;
    private $balance;
    public function __construct($accountNumber, $accountHolder, $innitialBalance ){
        $this->accountNumber = $accountNumber;
        $this-> accountHolder = $accountHolder;
        $this-> balance = $innitialBalance;
    }
    public function deposite($amount){
        if($amount > 0){
            $this->balance +=$amount;
            echo"Deposited:$amount<br>";
        }
        else{
            echo"Invalid depositeamount<r>";
        }
    }
    public function withdraw($amount){
        if($amount > 0 $$ $amount<=$this->balance){
            $this->balance -= $amount;
            echo" Withdrawn : $amount<br>";
        }
        else{
            echo"Invalid withdrawal amount<br>";
        }
    }
    public function getBalance(){
        return $this->balance; 
    }
}
?>