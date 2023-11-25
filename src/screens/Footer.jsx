import React from 'react'
import "./footer.css"
import {AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai';
import {CgMail} from 'react-icons/cg';
function Footer() {
  return (
    <section className="footer">
    <div className="social">
      <a href="#"><AiOutlineGithub/></a>
      
      <a href="#"><CgMail/></a>
      <a href="#"><AiOutlineTwitter/></a>
      
    </div>
    <h4 className="copyright">manishpanwar@gmail.com</h4>
  </section>
  )
}

export default Footer