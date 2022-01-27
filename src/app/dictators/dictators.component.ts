import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Dictator } from './dictator';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.scss']
})
export class DictatorsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiService: ApiServiceService) { }

  dictators: Dictator[] = [];

  dictatorForm: FormGroup = this.formBuilder.group({
    firstName: ['John',Validators.required],
    lastName: ['Doe', [Validators.required, Validators.minLength(1)]],
    birthYear: ['2000', Validators.required],
    deathYear: ['2023', Validators.required],
    description: ['Dies soon', Validators.required]
  });
  
  onSubmit() {
    this.apiService.add(this.dictatorForm.value).subscribe(() => {
      complete: this.apiService.get().subscribe((dictators: Dictator[]) => {
        next: this.dictators = dictators;
        complete: if (this.dictators.length >= 1) {
          // console.log("Sure is!");
          // console.log(dictators);
        }
      });
    });
    
    // this.dictators.push(this.dictatorForm.value);
    // this.dictators[this.dictators.length - 1].id = this.dictators.length - 1;
  }

  removeDictator(id: number) {
    console.log(id);
     this.apiService.remove(id).subscribe(() => {
      // complete: for (let i = 0; i < this.dictators.length; i++) {
      //   if (this.dictators[i].id == id)
      //   {
      //     this.dictators.splice(i, 1);
      //   }
      //   console.log("treasd");
      // }
     });

     for (let i = 0; i < this.dictators.length; i++) {
      if (this.dictators[i].id == id)
      {
        this.dictators.splice(i, 1);
      }
    }
  }

  ngOnInit(): void {
    this.apiService.get().subscribe((dictators: Dictator[]) => {
      next: this.dictators = dictators;
      complete: if (this.dictators.length >= 1) {
        // console.log("Sure is!");
        // console.log(dictators);
      }
    });
  }

}
