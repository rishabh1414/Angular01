import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForm01Component } from './template-driven-form01.component';

describe('TemplateDrivenForm01Component', () => {
  let component: TemplateDrivenForm01Component;
  let fixture: ComponentFixture<TemplateDrivenForm01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenForm01Component]
    });
    fixture = TestBed.createComponent(TemplateDrivenForm01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
