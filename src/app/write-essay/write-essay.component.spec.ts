import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteEssayComponent } from './write-essay.component';

describe('WriteEssayComponent', () => {
  let component: WriteEssayComponent;
  let fixture: ComponentFixture<WriteEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
