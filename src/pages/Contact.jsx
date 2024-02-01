import  { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [loading, setLoading] = useState(false);
  const [sendButton, setSendButton] = useState('Send');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setIsValidEmail(true); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSendButton('Sending...');

    if (!emailRegex.test(form.email)) {
      setIsValidEmail(false);
      setLoading(false);
      setSendButton('Send');
      return;
    }

    emailjs
      .send(
        "service_lhg636w",
        "template_uaevb3s",
        {
          from_name: form.name,
          to_name: 'Sefeoluwa',
          from_email: form.email,
          to_email: 'sefeoluwaakinbeye@gmail.com',
          message: form.message,
        },
        'FCc5GcNwGoR1Dwx7_'
      )
      .then(() => {
        setLoading(false);
        setSendButton('Sent');
        setTimeout(() => {
          setSendButton('Send');
        }, 2000);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        setSendButton('Error');
        setTimeout(() => {
          setSendButton('Send');
        }, 2000);
        console.log(error);
        alert('Snap! Something went wrong. Please resend your message');
      });
  };

  return (
    <div className='h-[70vh] flex items-center justify-center '>
      <div  className='form lg:w-[1024px] md:h-690px h-[684px] w-[358px]' >
        <h1 >Get in touch</h1>
        <p >Let's build something awesome.</p>

       <div className="">

          <div className="flex gap-60 p-4 items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#F63636] rounded-full"></div>
              <div className="w-3 h-3 bg-[#F6C136] rounded-full"></div>
              <div className="w-3 h-3 bg-[#68F636] rounded-full"></div>
            </div>
            <p>New Message</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className=''>
          <label htmlFor="name" className="">
            <span className=''>Your Name</span>
            <input type="text" name='name' id='name' value={form.name} onChange={handleChange} placeholder="What's your name?" required className='' aria-label='name'/>
          </label>

          <label htmlFor="email" className="">
                <span className=''>Your Email</span>
                <input
                  type="text"
                  name='email'
                  id='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={`placeholder:text-secondary rounded-lg outlined-none border-none font-medium ${!isValidEmail ? 'border-red-500' : ''}`}
                />
                {!isValidEmail && (
                  <span className="text-red-500">Invalid email format</span>
                )}
              </label>

          <label htmlFor="" className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" required className='placeholder:text-secondary ' />
          </label>

            <button type='submit' className=''>{loading ? 'Sending...' : sendButton}</button>
          </form>
       </div>
      </div>
    </div>
  )
}

export default Contact