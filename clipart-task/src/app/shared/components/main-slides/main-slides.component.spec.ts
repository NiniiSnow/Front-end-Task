import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSlidesComponent } from './main-slides.component';

describe('MainSlidesComponent', () => {
  let component: MainSlidesComponent;
  let fixture: ComponentFixture<MainSlidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MainSlidesComponent]
});
    fixture = TestBed.createComponent(MainSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
