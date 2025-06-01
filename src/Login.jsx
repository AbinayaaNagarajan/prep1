import React, {useState} from 'react';

const Login=()=>{
    const [email,setEmail] =useState ('');
    const [password, setPassword]= useState ('');
    const [error, setError] = useState ('');

    const handleSubmit=(e)=>{
    e.preventDefault();
    
    if (!email && !password) {
        setError("Please enter email and password");
        return;
      } else if (!email) {
        setError("Please enter your email");
        return;
      } else if (!password) {
        setError("Please enter your password");
        return;
      }
    setError('');
    alert(`Login successful $(email)`);
};

return(
    <div style={{  minHeight:'500px', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0'}}>
        <form onSubmit={handleSubmit}>
            <h2 style={{textAlign:"center", marginBottom : '1rem'}}>
                Login
            </h2>
            {error && <p style={{color:'red'}}>{error}</p>}
            <div>
                <label>Email:</label><br />
                <input type="email" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>

            </div>
            <div>
                <label>Password:</label><br />
                <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" style={{width:'10%',margin:'10px', padding: '0.5rem', background: 'blue' , color: 'white' ,border: 'none', borderRadius: '5px'}}>Submit</button>
        </form>
    </div>
);
};
export default Login;