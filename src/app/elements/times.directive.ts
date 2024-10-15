import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true
})
export class TimesDirective {

  //Objective: This will be used to print some no of elements, some no of times
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef:TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times:number){
    this.viewContainer.clear();

    for(let i=0;i<times;i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }

}
