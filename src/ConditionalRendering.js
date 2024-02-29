//conditional rendering using if else statement
function Authenticate() {
    let content;
    if (isLoggedIn) {
      content = <adminPanel />;
    } else {
      content = <LoginForm/>;
    }
   
    return(
    <div>
      {content}
    </div>
    );
   }
   
   // conditional rendering using .? statement
   <div>
     {isLoggedIn ? (
       <adminPanel />
     ) : (
       <LoginForm />
     )}
   
     //using logical && syntax
     {isLoggedIn && <AdminPanel />}
   </div>
   