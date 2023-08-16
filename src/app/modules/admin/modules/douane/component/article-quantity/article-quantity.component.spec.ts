import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleQuantityComponent } from './article-quantity.component';

describe('ArticleQuantityComponent', () => {
  let component: ArticleQuantityComponent;
  let fixture: ComponentFixture<ArticleQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
