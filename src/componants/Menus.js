import React from 'react'
import { Link} from "react-router-dom";

export default function Menus() {
  return (
    <div>
      <ul class="list-group">
  <li class="list-group-item list-group-item-action text-dark"><Link className="nav-link text-dark" to="/">Home</Link></li>
  <li class="list-group-item list-group-item-action"><Link className="nav-link text-dark" to="/add-courses">Add Courses</Link></li>
  <li class="list-group-item list-group-item-action"><Link className="nav-link text-dark" to="/view-courses">View Courses</Link></li>
  <li class="list-group-item list-group-item-action"><Link className="nav-link text-dark" to="/">About Us</Link></li>
  <li class="list-group-item list-group-item-action"><Link className="nav-link text-dark" to="/">Contact Us</Link></li>
</ul>
    </div>
  )
}
