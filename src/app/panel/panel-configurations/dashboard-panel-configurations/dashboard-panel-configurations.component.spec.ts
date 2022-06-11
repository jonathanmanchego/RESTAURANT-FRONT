import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPanelConfigurationsComponent } from './dashboard-panel-configurations.component';

describe('DashboardPanelConfigurationsComponent', () => {
  let component: DashboardPanelConfigurationsComponent;
  let fixture: ComponentFixture<DashboardPanelConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPanelConfigurationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPanelConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
