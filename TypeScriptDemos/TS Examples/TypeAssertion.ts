class Cat{
    public sound(){
        console.log("Mew");
    }
}

class Dog{
    public sound(){
        console.log("Barks")
    }
    public swim(){
        console.log("Swims only in pools");
    }
};

let cat = new Cat();
cat.sound();
cat = new Dog();
(<Dog>cat).swim();//cats dont swim...
