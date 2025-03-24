import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { BaseButtonComponent } from "../../components/base-button/base-button.component";

@Component({
  selector: 'app-content',
  imports: [RouterModule, BaseButtonComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string | null = "0"
  
  route = inject(ActivatedRoute)
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))

    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]


    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover

  }


}
