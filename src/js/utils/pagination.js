export default class Pagination {
  pageCount = 0;
  pageIndex = 0;
  container = null;

  constructor({ container, count, index }) {
    this.pageCount = count;
    this.pageIndex = index;
    this.container = container;

    this.render = this.render.bind(this);
    this.handlePaginationItemClick = this.handlePaginationItemClick.bind(this);

    this.render();

    document.addEventListener('click', this.handlePaginationItemClick);
  }

  render() {
    let liTag = '';
    let active = '';
    let beforePage = this.pageIndex - 1;
    let afterPage = this.pageIndex + 1;

    if (this.pageCount > 1) {
      //show the next button if the page value is greater than 1
      liTag += `<li class="btn prev list-item"><span><i class="fas fa-angle-left"></i> <svg id="icon-sun " width: 20px
    height: 20px; class="pag-rrow-left>
        <use href="/src/img/icons.svg#icon-sun"></use>
      </svg></span></li>`;
    }

    // disable Prev button if page is 1
    // disable Next button if page is exceeds total pages
    if (this.pageIndex < 1 || this.pageIndex > this.pageCount) return;

    if (this.pageIndex > 2 && this.pageCount > 4) {
      //if page value is less than 2 then add 1 after the previous button
      liTag += `<li data-index="1" class="first list-item"><span>1</span></li>`;
      if (this.pageIndex > 3 && this.pageCount > 5) {
        //if page value is greater than 3 then add this (...) after the first li or page
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }

    // how many pages or li show before the current li
    if (this.pageIndex === this.pageCount) {
      beforePage = beforePage - 2;
    } else if (this.pageIndex === this.pageCount - 1) {
      beforePage = beforePage - 1;
    }
    // how many pages or li show after the current li
    if (this.pageIndex === 1) {
      afterPage = afterPage + 2;
    } else if (this.pageIndex === 2) {
      afterPage = afterPage + 1;
    }
    console.log({
      pageIndex: this.pageIndex,
      pageCount: this.pageCount,
      beforePage,
      afterPage,
    });
    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > this.pageCount) {
        //if plength is greater than totalPage length then continue
        continue;
      }
      console.log({ plength });
      if (plength < 0) {
        plength = 0;
      }

      if (plength === 0) {
        //if plength is 0 than add +1 in plength value
        plength = plength + 1;
      }

      if (this.pageIndex === plength) {
        //if page is equal to plength than assign active = '' string in the active variable
        active = 'active';
      } else {
        //else leave empty to the active variable
        active = '';
      }

      liTag += `<li data-index="${plength}" class="list-item ${active}"><span>${plength}</span></li>`;
    }

    if (this.pageIndex < this.pageCount - 1) {
      //if page value is less than totalPage value by -1 then show the last li or page
      if (this.pageIndex < this.pageCount - 2 && this.pageCount > 5) {
        //if page value is less than totalPage value by -2 then add this (...) before the last li or page
        liTag += `<li class="dots"><span>...</span></li>`;
      }

      if (this.pageCount > 4) {
        liTag += `<li data-index="${this.pageCount}" class="last list-item"><span>${this.pageCount}</span></li>`;
      }
    }

    if (this.pageCount > 1) {
      //show the next button if the page value is less than totalPage
      liTag += `<li class="btn next list-item"><span>Sex <i class="fas fa-angle-right"></i></span></li>`;
    }
    if (this.container) {
      this.container.innerHTML = liTag;
    }
  }

  handlePaginationItemClick(e) {
    e.stopPropagation();
    const target = e.target;
    const anchorEl = target.closest('.list-item');
    const isButton = anchorEl?.classList.contains('btn') || false;
    const isPrev = anchorEl?.classList.contains('prev') || false;

    if (isButton) {
      if (this.pageIndex < this.pageCount && !isPrev) {
        this.setPageIndex(this.pageIndex + 1);
      } else if (this.pageIndex > 1 && isPrev) {
        this.setPageIndex(this.pageIndex - 1);
      }
      return;
    }

    if (anchorEl) {
      const dataIndex = parseInt(anchorEl.dataset.index, 10);
      this.setPageIndex(dataIndex);
    }
  }

  setPageIndex(newIndex) {
    this.pageIndex = newIndex;
    this.render();
  }
}
