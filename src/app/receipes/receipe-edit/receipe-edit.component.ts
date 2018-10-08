import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ReceipeService} from "../receipe.service";

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css']
})
export class ReceipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  receipeForm: FormGroup;

  constructor(private route:ActivatedRoute, private receipeService: ReceipeService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm(){
    let receipename = '';
    let receipeImagePath = '';
    let receipDescription = '';
    let receipeIngredients = new FormArray([]);
    if (this.editMode){
      const receipe = this.receipeService.getReceipe(this.id);
      receipename = receipe.name;
      receipeImagePath = receipe.imagePath;
      receipDescription = receipe.description;
      if (receipe['ingredients']){
        for (let ingredient of receipe.ingredients){
          receipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.receipeForm = new FormGroup({
      'name': new FormControl(receipename, Validators.required),
      'imagePath': new FormControl(receipeImagePath, Validators.required),
      'description': new FormControl(receipDescription, Validators.required),
      'ingredients': receipeIngredients
    });
  }

  onSubmit(){
    // const newReceipe = new Receipe(
    //   this.receipeForm.value['name'],
    //   this.receipeForm.value['description']),
    //   this.receipeForm.value['iamgepath']),
    //   this.receipeForm.value['ingredients'])
    if (this.editMode){
      this.receipeService.updateReceipe(this.id, this.receipeForm.value);
    }else{
      this.receipeService.addReceipe(this.receipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.receipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.receipeForm.get('ingredients')).removeAt(index);
  }

}
