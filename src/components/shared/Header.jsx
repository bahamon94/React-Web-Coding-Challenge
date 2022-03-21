import React from 'react'
import { Link } from "wouter";
import logo from '../../assets/policeberlin.png';

export default function Header() {
  return (
    <div className="p-8 text-black text-6xl font-bold">
      <div className="flex">
        <Link to={'/'}>
          <img className="flex-start px-5 w-24 cursor-pointer" src={logo}  alt="policeberlin"/>
        </Link>
        <div className="flex-grow"> Police Department of berlin </div>
      </div>
      <small className="font-light text-3xl">Stolen bykes </small>
    </div>
  )
}