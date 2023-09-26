const btn = document.querySelector(".btn"),
  counter = document.querySelector(".counter");

let counterId = 0;

btn.addEventListener("click", () => {
  counterId += 1;
  console.log(counterId);
  counter.textContent = (`Counter: ${counterId}`);
});

data(){
    return{
        counter: 0  // #1 Model
                    // new Proxy
    }
}

counter += 1