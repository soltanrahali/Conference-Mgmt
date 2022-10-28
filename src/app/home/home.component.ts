import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authentificationService:AuthentificationService
    ) { }

  ngOnInit(): void {
  }



  pdf(){
    var element = document.getElementById('t')
    html2canvas(element).then((canvas)=>{
      console.log(canvas);
      var imgData = canvas.toDataURL('image/png');
      var doc=new jspdf();
      var imgHeight = canvas.height * 208 / canvas.width;
      doc.addImage(imgData,0,0,208,imgHeight);
      doc.save("plan.pdf");
    })
  }


}