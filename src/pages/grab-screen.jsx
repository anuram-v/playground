import React from 'react';
import Header from '../components/Header';
import FormComponent from "../components/FormComponent"
export default function Form() {

  return (
    <div className="container">
      <Header />
      <FormComponent />
      <style jsx global>{`
        p {
          font-size: 20px;
        }
      `}</style>
    </div>
  )
}