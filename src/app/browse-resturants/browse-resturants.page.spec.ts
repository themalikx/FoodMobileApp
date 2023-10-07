import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseResturantsPage } from './browse-resturants.page';

describe('BrowseResturantsPage', () => {
  let component: BrowseResturantsPage;
  let fixture: ComponentFixture<BrowseResturantsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrowseResturantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
