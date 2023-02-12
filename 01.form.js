// html
<div class="container">
    <form>
      <div class="mb-3">
          <label>Name</label>
          <input type="text" class="form-control" name="">
      </div>
      <div class="mb-3">
          <label>Address</label>
          <textarea class="form-control" rows="5"></textarea>
      </div>
      <div class="mb-3">
          <label>City</label>
          <select class="form-control">
            <option>Select City</option>
            <option value="Yangon">Yangon</option>
            <option value="Mandalay">Mandalay</option>
          </select>
      </div>
       <div class="mb-3">
          <label>Gender</label>
          <input type="radio">
          <span>Male</span>
          <input type="radio"> 
          <span>Female</span>
      </div>
      <div class="mb-3">
          <label>Hobby</label>
          <input type="checkbox">
          <span>Reading</span>
          <input type="checkbox">
          <span>Coding</span>
          <input type="checkbox">
          <span>Learning</span>
      </div>
      <div class="mb-3">
        <button class="btn">Submit</button>
      </div>
    </form>
 </div>
 
 // css
 <style>
  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 960px;
    margin: auto;
    padding: 10px;
  }
  label {
    display: block;
    margin: 5px 0;
  }
  .mb-3 {
    margin: 10px 0;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 5px;
    font-size: 16px;
  }
  input[type="text"],
  input[type="email"],
  select {
    height: 35px;
  }
  .btn {
    padding: 7px 20px;
    border: none;
    background-color: #6366f1;
    color: #fff;
    border-radius: 4px;
  }
</style>
