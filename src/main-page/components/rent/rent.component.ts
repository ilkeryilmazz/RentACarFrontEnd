import { Component, OnInit } from '@angular/core';
import { City } from 'src/main-page/models/cityModel';
import { CityService } from 'src/main-page/services/city.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Branch } from 'src/main-page/models/branchModel';
import { BranchService } from 'src/main-page/services/branch.service';
import { formatDate } from '@angular/common';
import { AuthService } from 'src/main-page/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DataShareService } from 'src/main-page/services/data-share.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  constructor(public router: Router, private dataService: DataShareService, private cityService: CityService, private formBuilder: FormBuilder, private branchService: BranchService, private authService: AuthService, private toastrService: ToastrService) { }
  rentForm: FormGroup
  cities: City[]
  branches: Branch[]
  currentCity: City
  currentBranch: Branch

  today = new Date()
  ngOnInit(): void {
    this.getAllCity();
    this.createRentForm()
    this.getAllBranches();


  }
  createRentForm() {
    this.rentForm = this.formBuilder.group({
      city: ["", Validators.required],
      branch: ["", Validators.required],
      rentDate: ["", Validators.required],
      returnDate: ["", Validators.required],
    })
  }
  getAllCity() {
    this.cityService.getAll().subscribe(response => {

      this.cities = response.data
      console.log(this.cities)
    })

  } getAllBranches() {
    this.branchService.getAll().subscribe(response => {

      this.branches = response.data
      console.log(this.branches)
    })
  }
  getBranchesByCityId() {
    console.log(this.currentCity)
    this.branchService.getByCityId(this.currentCity.id).subscribe(response => {
      this.branches = response.data
      console.log(this.branches, response)
    })
  }
  setCurrentCity(city: City) {
    this.currentCity = city
  }
  validateRentDate() {

    if (new Date(this.rentForm.get('rentDate').value) > this.today) {
      return false
    }
    return true
  }
  validateReturnDate() {
    if (new Date(this.rentForm.get('rentDate').value) < new Date(this.rentForm.get('returnDate').value)) {
      return false
    }
    return true
  }
  navigateCars() {
    this.router.navigateByUrl("/cars")
  }
  rent() {
    if (!this.validateRentDate()) {
      if (this.validateReturnDate) {
        console.log(this.rentForm.value)
        let rentModel = Object.assign({}, this.rentForm.value)
        this.dataService.updateData(rentModel)
        if (rentModel) {
          this.navigateCars()
        }
      }
    }

  }
  isAuthenticated() {

    if (!this.authService.isAuthenticated()) {
      this.toastrService.error("Lütfen giriş yapın.")
    }
    this.rent()
    
  }
}
