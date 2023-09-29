class BookDetails{
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}
class LibraryItem{
    constructor(iitemId, bookDetails){
        this.iitemId = iitemId;
        this.bookDetails = bookDetails;
        this.isAvailable = true;
    }
    borrow(){
        if(this.isAvailable){
            this.isAvailable = false;
            return true;
        }
        else{
            return false;
        }
    }
    returnItem(){
        if(!this.isAvailable){
            this.isAvailable = true;
            return true;
        }
        else{
            return false;
        }
    }

}
class Student{
    constructor(studentID, name){
        this.studentID = studentID;
        this.name = name;
        this.borrowedItems = [];
    }
    borrowItem(libraryItem){
        if(libraryItem.borrow()){
            this.borrowItem.push(libraryItem);
            return true;
        }
        else{
            return false;
        }
    }
    returnItem(libraryItem){
        const index = this.borrowedItems.indexOf(libraryItem);
        if(index !== -1) {
            this.borrowedItems.splice(index, 1);
            libraryItem.returnItem();
            return true;
        }
        else{
            return false;
        }
    }
}