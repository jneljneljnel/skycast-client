import { Component } from '@angular/core';
import {Http, Response, Headers,URLSearchParams, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 33.7829;
  lng: number = -118.15873;
  data: any = [];
  currently : any = [];
  week: any = [];
  searchHistory: any = [];
  markers: any = [
	  {
		  lat: 33.7829,
		  lng: -118.15873,
		  label: 'A',
		  draggable: false
	  }	 
  ];
  locals:any = [];


local1:any=  JSON.parse(localStorage.getItem('local1')) || 0;
local2:any=  JSON.parse(localStorage.getItem('local2')) || 0;
local3:any=  JSON.parse(localStorage.getItem('local3')) || 0;
local4:any=  JSON.parse(localStorage.getItem('local4')) || 0;
local5:any=  JSON.parse(localStorage.getItem('local5')) || 0;
local6:any=  JSON.parse(localStorage.getItem('local6')) || 0;
local7:any=  JSON.parse(localStorage.getItem('local7')) || 0;
local8:any=  JSON.parse(localStorage.getItem('local8')) || 0;
local9:any=  JSON.parse(localStorage.getItem('local9')) || 0;
local10:any=  JSON.parse(localStorage.getItem('local10'))||0;


  constructor(private http: Http ){
        this.getWeather(33.71,-118.15873);
  }

   getWeather(lat, lng) {
    this.getWeatherPost(lat, lng).subscribe(data => {
      this.data = data  
      this.currently = data.currently
      this.week = data.daily.data  
    });
  }

  getWeatherPost(lat, lng){
  	const body = {lat:lat, lng:lng};
    return this.http.post('https://fast-cliffs-17077.herokuapp.com/weather', body)
      .map((res:Response)=>res.json())
  }

  recentSearch(lat, lng) {
     this.mapClicked(0, lat, lng)
  }

  mapClicked($event: any, plat, plng) {
    let lat:any = 0;
    let lng:any=0;
    if($event) {
       lat =  $event.coords.lat,
       lng = $event.coords.lng
    }
    if(plat) {
       lat = plat
       lng = plng
    } 

    this.getWeather(lat,lng)

    let newMarkers = [{
  	  lat: lat,
  	  lng: lng
  	}] 
  	this.markers = newMarkers;
    
    this.lat = lat;
    this.lng = lng;
    
    let search = {
      lat: lat,
      lng: lng
    }
    //fix this
    //should be a loop with dynamic variables but was short on time
    if(this.local1 == 0){
      localStorage.setItem('local1', JSON.stringify(search));
    }
    else if(this.local2 == 0){
      localStorage.setItem('local2', JSON.stringify(search));
    }
    else if(this.local3 == 0){
      localStorage.setItem('local3', JSON.stringify(search));
    }
    else if(this.local4 == 0){
      localStorage.setItem('local4', JSON.stringify(search));
    }
    else if(this.local5 == 0){
      localStorage.setItem('local5', JSON.stringify(search));
    }
    else if(this.local6 == 0){
      localStorage.setItem('local6', JSON.stringify(search));
    }
    else if(this.local7 == 0){
      localStorage.setItem('local7', JSON.stringify(search));
    }
    else if(this.local8 == 0){
      localStorage.setItem('local8', JSON.stringify(search));
    }
    else if(this.local9 == 0){
      localStorage.setItem('local9', JSON.stringify(search));
    }
    else if(this.local10 == 0){
      localStorage.setItem('local10', JSON.stringify(search));
    }
  } 
}
