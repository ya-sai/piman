// https://docs.cypress.io/api/introduction/api.html

describe("Tree rules", () => {
  it("tree node should be visible when it parent is expand", () => {
    cy.visit("/tree");
    cy.contains("Tree");
    cy.get(
      "#app > div:nth-child(2) > section > article > section:nth-child(2) > ul > li:nth-child(1) > div"
    ).click();

    cy.get(
      "#app > div:nth-child(2) > section > article > section:nth-child(2) > ul > li:nth-child(1) > ul > li:nth-child(1) > div"
    ).should("be.visible");
  });

  it("tree node should be all checked when it parent is checked", () => {
    cy.contains("Tree");
    const target =
      "#app > div:nth-child(2) > section > article > section:nth-child(3) > ul > li:nth-child(1) > div > input";
    cy.get(target).check();
    cy.get(target).should("be.checked");

    cy.get(
      "#app > div:nth-child(2) > section > article > section:nth-child(3) > ul > li:nth-child(1) > div"
    ).click();

    const targetChilds =
      "#app > div:nth-child(2) > section > article > section:nth-child(3) > ul > li:nth-child(1) input";
    // retry 直到 node 都可見
    // cy.get(targetChilds, { timeout: 10000 }).should('have.length', 3)
    cy.get(targetChilds).should("be.checked");
  });

  it("tree root node 勾選之後子節點都會被勾選，再次勾選後子節點也都會被取消勾選", () => {
    cy.contains("Tree");
    const target =
      "#app > div:nth-child(2) > section > article > section:nth-child(3) > ul > li:nth-child(1) > div.bpa-tree-node__inner > input";
    cy.get(target).check();
    cy.get(target).should("be.checked");

    cy.get(
      "#app > div:nth-child(2) > section > article > section:nth-child(3) > ul > li:nth-child(1) > div.bpa-tree-node__inner"
    ).click();

    const targetChilds =
      "#app > div:nth-child(2) > section > article > section:nth-child(3) > ul > li:nth-child(1) input";
    cy.get(targetChilds).should("be.checked");
    cy.get(target).uncheck();
    cy.get(targetChilds).should("be.not.checked");
  });

  it("當不是唯一的子節點被勾選以後，父節點會呈現 indeterminate 的狀態", () => {
    const target =
      "#app > div:nth-child(2) > section > article > section:nth-child(4) > ul > li:nth-child(1) > ul > li:nth-child(1) > div";
    cy.get(target + " > input").check();
    cy.get(
      "#app > div:nth-child(2) > section > article > section:nth-child(4) > ul > li:nth-child(1) > div.bpa-tree-node__inner > input"
    ).should("have.prop", "indeterminate", true);
  });

  it("當不是唯一的子節點被勾選以後，所有的祖輩節點都會呈現 indeterminate 的狀態", () => {
    const target =
      "#app > div:nth-child(2) > section > article > section:nth-child(4) > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(1) > div";
    cy.get(target + " > input").check();
    cy.get(
      "#app > div:nth-child(2) > section > article > section:nth-child(4) > ul > li:nth-child(2) > div.bpa-tree-node__inner > input"
    ).should("have.prop", "indeterminate", true);
  });
});

// 想寫測試結果 cypress 不支援，但看起來 puppeteer 好像可以
// https://github.com/cypress-io/cypress/issues/299
// https://techoverflow.net/2019/08/16/how-to-emulate-tab-key-press-in-puppeteer/

// describe("Tree 鍵盤事件", () => {
// it("key 'enter or space' 會展開/收合子節點，等同於 click 事件", () => {
// cy.visit("/tree");
// });
// it("key 'down' 將焦點移到下一個可聚焦的節點，而無需打開或關閉節點。如果焦點在最後一個節點上，則不執行任何操作。", () => {});
// it("key 'up' 將焦點移至可聚焦的上一個節點，而無需打開或關閉節點。如果焦點在第一個節點上，則不執行任何操作。", () => {});
// it("key 'right' 當焦點在一個關閉的節點上時，打開該節點；焦點不動。當焦點在一個打開的節點上時，將焦點移到第一個子節點。當焦點在一個末端節點上時，什麼都不做。", () => {});
// it("key 'left' 當焦點在一個關閉的節點上時，打開該節點；焦點不動。當焦點位於同時也是結束節點或封閉節點的子節點上時，將焦點移至其父節點。當焦點在同時是端節點或封閉節點的根節點上時，什麼都不做。", () => {});
// it("key 'home' 在不打開或關閉節點的情況下將焦點移至第一個節點。", () => {});
// it("key 'end' 將焦點移到最後一個可以聚焦的節點，而無需展開任何關閉的節點。", () => {});
// it("key '*' 展開與焦點節點處於同一級別的所有關閉的兄弟節點。焦點不動。", () => {});
// it("key 'a-z, A-Z' 焦點移動到名稱以鍵入的字符開頭的下一個節點。如果在焦點節點之後的節點中找不到匹配的名稱，則搜索將返回到第一個節點。搜索忽略作為封閉節點後代的節點。", () => {});
// });
