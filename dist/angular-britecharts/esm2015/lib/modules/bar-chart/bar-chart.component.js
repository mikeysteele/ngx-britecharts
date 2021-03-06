/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import chart from 'britecharts/dist/umd/bar.min';
import { ChartType } from '../../chart.types';
export class BarChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart();
        this.selector = '.bar-chart';
        this.clickSelector = '.bar-chart .bar';
        this.tooltipContainerSelector = '.bar-chart .metadata-group';
        this.type = ChartType.Bar;
    }
}
BarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-bar-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .bar-chart .bar{shape-rendering:crispEdges}:host ::ng-deep .bar-chart .y-axis-group .tick text{font-size:14px}:host ::ng-deep .bar-chart .axis path{display:none}:host ::ng-deep .bar-chart .tick line{display:none}:host ::ng-deep .bar-chart .adjust-upwards{-webkit-transform:translate(0,-10px);transform:translate(0,-10px)}:host ::ng-deep .bar-chart .percentage-label{fill:#666a73}"]
            }] }
];
/** @nocollapse */
BarChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    BarChartComponent.prototype.chart;
    /**
     * @type {?}
     * @protected
     */
    BarChartComponent.prototype.selector;
    /**
     * @type {?}
     * @protected
     */
    BarChartComponent.prototype.clickSelector;
    /**
     * @type {?}
     * @protected
     */
    BarChartComponent.prototype.tooltipContainerSelector;
    /**
     * @type {?}
     * @protected
     */
    BarChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0sOEJBQThCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTTlDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxrQkFBa0I7Ozs7SUFPdkQsWUFBWSxVQUFzQjtRQUNoQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFQYixVQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixhQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFDbEMsNkJBQXdCLEdBQUcsNEJBQTRCLENBQUM7UUFDeEQsU0FBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFJL0IsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFlBQXlDOzthQUUxQzs7OztZQVJtQixVQUFVOzs7O0lBVTVCLGtDQUF1Qjs7Ozs7SUFDdkIscUNBQWtDOzs7OztJQUNsQywwQ0FBNEM7Ozs7O0lBQzVDLHFEQUFrRTs7Ozs7SUFDbEUsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jaGFydC5iYXNlJztcbmltcG9ydCBjaGFydCBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC9iYXIubWluJztcbmltcG9ydCB7IENoYXJ0VHlwZSB9IGZyb20gJy4uLy4uL2NoYXJ0LnR5cGVzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyaXRlLWJhci1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYXJDaGFydENvbXBvbmVudCBleHRlbmRzIENoYXJ0QmFzZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBjaGFydCA9IGNoYXJ0KCk7XG4gIHByb3RlY3RlZCBzZWxlY3RvciA9ICcuYmFyLWNoYXJ0JztcbiAgcHJvdGVjdGVkIGNsaWNrU2VsZWN0b3IgPSAnLmJhci1jaGFydCAuYmFyJztcbiAgcHJvdGVjdGVkIHRvb2x0aXBDb250YWluZXJTZWxlY3RvciA9ICcuYmFyLWNoYXJ0IC5tZXRhZGF0YS1ncm91cCc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLkJhcjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZik7XG4gIH1cblxufVxuIl19