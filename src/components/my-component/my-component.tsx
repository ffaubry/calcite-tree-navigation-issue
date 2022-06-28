import { Component, Element, h, Listen } from '@stencil/core';
import '@esri/calcite-components';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Element() el: HTMLCalciteTreeElement;

  @Listen('keydown')
  keyDownHandler(event: KeyboardEvent): void {
    // if (event.key !== 'ArrowRight' || !event.composed){ 
    //   return;
    // }
    // const target = (event.composedPath()[0] as HTMLCalciteTreeItemElement);
    // if (!target || !target?.hasChildren) {
    //   return;
    // }

    // target.querySelector('calcite-tree-item').focus();
  }

  render() {
    return (
      // Comment the <div></div>: and notice that it will not compile
      <div>
        <calcite-tree>
          <calcite-tree-item>propA: True</calcite-tree-item>
          <calcite-tree-item>y: 23</calcite-tree-item>
          <calcite-tree-item>
            x:&nbsp;"If shortcuts are desired to be caught within a particular block/area rather than across the entire document, then the keydown and keyup events should be on
            that block or element"
          </calcite-tree-item>
          <calcite-tree-item>
            <div>propB: Dictionary</div>
            <calcite-tree slot="children">
              <calcite-tree-item>Grandchild 1</calcite-tree-item>
              <calcite-tree-item>
                Grandchild 2
                <calcite-tree slot="children">
                  <calcite-tree-item>Great-grandchild 1</calcite-tree-item>
                  <calcite-tree-item>
                    Great-grandchild 2
                    <calcite-tree slot="children">
                      <calcite-tree-item>Great-great-grandchild 1</calcite-tree-item>
                      <calcite-tree-item>
                        Great-great-grandchild 2
                        <calcite-tree slot="children">
                          <calcite-tree-item>Great-great-great-grandchild 1</calcite-tree-item>
                          <calcite-tree-item>Great-great-great-grandchild 2</calcite-tree-item>
                        </calcite-tree>
                      </calcite-tree-item>
                    </calcite-tree>
                  </calcite-tree-item>
                </calcite-tree>
              </calcite-tree-item>
            </calcite-tree>
          </calcite-tree-item>
        </calcite-tree>
      </div>
    );
  }
}
