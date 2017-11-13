/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

// When testing attribute directive, you should create a host component in your test to test various
//    usages of that attribute
@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // Need to add both component and directive in declarations
      // If directive is not added, that it won't be applied, bcoz angular will not recognize it
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });

  it('should highlight the first element with cyan', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];

    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];
    let directive = de.injector.get(HighlightDirective);

    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
