import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomShadersComponent } from './custom-shaders.component';

describe('CustomShadersComponent', () => {
  let component: CustomShadersComponent;
  let fixture: ComponentFixture<CustomShadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomShadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomShadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
