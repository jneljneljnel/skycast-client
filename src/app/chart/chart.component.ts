import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import {Http, Response, Headers,URLSearchParams, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent  implements OnChanges, OnInit{
@Input() lat: number;
@Input() lng: number;
data:any = [];
hourly:any=[];
lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Last Week'},
  ];
// lineChart
constructor(private http: Http){ 

}
ngOnInit(){
   this.getHistory(this.lat, this.lng, '1508639105');  
}

ngOnChanges(changes: SimpleChanges) { 
  for (let propName in changes) {  
      let change = changes[propName];
      if(propName == "lat"){
        this.lat = parseInt(JSON.stringify(change.currentValue))
      }
      if(propName == "lng"){
        this.lng = parseInt(JSON.stringify(change.currentValue))      }
  }
  this.getHistory(this.lat, this.lng, '1508639105');
}

getHistory(lat, lng, hist) {
    this.getHistoryPost(lat, lng, hist).subscribe(data => {
      this.data = data 
      this.packageHighData(data);   
    });
}

packageHighData(data){
  let hArray = []
  data.hourly.data.map(d=>{
    hArray.push(d.temperature)
  })
  this.hourly = hArray
  this.lineChartData = [ {data: hArray, label: 'Last Week'},
]

}


getHistoryPost(lat, lng, hist){
  const body = {lat:lat, lng:lng, hist:hist};
  return this.http.post('https://fast-cliffs-17077.herokuapp.com/history', body)
    .map((res:Response)=>res.json())
}


  public lineChartLabels:Array<any> = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm', '10pm', '11pm', '12pm',];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }





}
