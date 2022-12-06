function SignIn(){
    return (
      <div> view port sign in
        <div>
          <div>wait, watch, wow!</div>
        </div>
        <div>
          <div>
            <h3>Sign Up</h3>          
            <p>Fill your additional details</p>
          </div>
        </div>
        <form>
          <div>
              <label for="fistName">First Name</label>
              <input type="text" name="fistName" id="fistName" placeholder="Write your first name" />
          </div>
          <div>
              <label for="lastName">last Name</label>
              <input type="text" name="lastName" id="lastName" placeholder="Write your last name" />
          </div>
          <div>
              <label for="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" placeholder="Write your phone number" />
          </div>
          <div>
              <label for="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Write your email" />
          </div>
          <div>
              <label for="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Write your password" />
          </div>       
          <button class="button-submit" type="submit">Sign Up</button>
        
        </form>
      </div>
    )
  }
  
  export default SignIn