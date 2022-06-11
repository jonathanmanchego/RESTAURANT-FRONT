import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConfigurationsComponent } from './panel-configurations.component';

describe('PanelConfigurationsComponent', () => {
  let component: PanelConfigurationsComponent;
  let fixture: ComponentFixture<PanelConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelConfigurationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
