import React from 'react';

const Contact = () => {
  return (
    <div>
           <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Contact Us</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1670593601~exp=1670594201~hmac=2c91a6489498937ad6b2543ba36d48f548ee6dcddaae111dee7bb9b0a6c7791f" alt="Contact Us" height="500px" width="500px" />
                    </div>
                    <div className="col-md-6">
                        <form className='mt-5'>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="John Smith"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Send Message</button>
                        </form>
                    </div>
                    </div>
                </div>
    </div>
  );
}

export default Contact;
