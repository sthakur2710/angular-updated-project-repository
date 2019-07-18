import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceItemDetailsComponent } from './resource-item-details.component';

describe('ResourceItemDetailsComponent', () => {
  let component: ResourceItemDetailsComponent;
  let fixture: ComponentFixture<ResourceItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
