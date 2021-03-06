const pageState = function(){
    let currentState = new homeState(this);

    this.init = function(){
        this.change(new homeState);
    }

    this.change = function(state){
        currentState = state;
    }
};
//home state
const homeState = function(page){
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>`;
};
//about state
const aboutState = function(page){
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>`;
};

//contact state
const contactState = function(page){
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
    <form> 
    <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control">
    </div>
    
    <div class="form-group">
    <label>Email Address</label>
    <input type="email" class="form-control" >
    </div>
  
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
};
//new page state
const page = new pageState();
page.init();

//event listeners
document.querySelector('#about').addEventListener('click',changeAboutState);
function changeAboutState(e){
page.change(new aboutState);
e.preventdefault();    
}
document.querySelector('#home').addEventListener('click',(e) => {
    page.change(new homeState);
    e.preventDefault();
});
document.querySelector('#contact').addEventListener('click',(e) => {
    page.change(new contactState);
    e.preventDefault();
});