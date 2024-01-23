<template>
  <div>
    <div class="my-2"
      :class="{ 'd-none': !excelButton.visiable && !pdfButton.visiable, 'd-block': searchInput.visiable }">
      <!-- Table Top -->
      <b-row align-h="between" :class="{ 'd-none': hideOptions }">
        <!-- Search -->
        <b-col cols="12" md="4">
          <div v-if="searchInput.visiable" class="d-flex align-items-center justify-content-end">
            <b-form-input v-model="searchQuery" class="d-inline-block" :clearable="true" :placeholder="$t('search')" />
          </div>
        </b-col>

        <b-col cols="12" md="4" class="list-buttons d-flex align-items-center justify-content-end mb-1 mb-md-0">
          <b-button variant="primary" data-action-type="new" v-if="createButton.visiable"
            v-permission="createButton.permission" @click="(v) => {
                $emit('on-create', v);
              }
              ">
            {{ createButton.text ? $t(createButton.text) : $t('new') }}
          </b-button>
          <vue-excel-xlsx v-if="excelButton.visiable" :data="items" :columns="columns" :filename="this.$route.name"
            :sheetname="'xlsxSheet'" class="btn btn-relief-success ml-1 p-0 ptn-sm">
            <img src="@/assets/images/icons/xls.jpg" alt="" style="height: 39px;width: auto;" />
          </vue-excel-xlsx>
          <b-button v-if="pdfButton.visiable" variant="relief-danger" class="ml-1 p-0 btn-sm" @click="printDocument">
            <img src="@/assets/images/icons/pdf.jpg" alt="" style="height: 39px;width: auto;" />
          </b-button>
        </b-col>
      </b-row>
    </div>

    <b-row v-if="!hideOptions" class="d-flex justify-content-between mb-50 footer-info">
      <!-- page length -->
      <b-form-group :label="$t('entries')" label-cols="6" label-align="left" label-size="sm" label-for="sortBySelect"
        class="text-nowrap mb-md-0 ml-1">
        <b-form-select id="perPageSelect" v-model="perPage" size="sm" inline @change="(v) => {
          if (perPage === 'الكل') {
            perPage = 10000
          }
        }" :options="perPageOptions" />
      </b-form-group>

      <!-- pagination -->
      <div>
        <b-pagination v-model="currentPage" :total-rows="totalRows || items.length" :per-page="perPage" first-number
          last-number prev-class="prev-item" next-class="next-item" class="mb-0 mr-1">
          <template #prev-text>
            <feather-icon icon="ChevronLeftIcon" size="18" />
          </template>
          <template #next-text>
            <feather-icon icon="ChevronRightIcon" size="18" />
          </template>
        </b-pagination>
      </div>
    </b-row>

    <b-row>
      <b-col cols="12" class="printDiv" id="printDiv" ref="printDiv" style="word-wrap: normal;
letter-spacing: normal;">
        <b-table v-bind="$attrs" ref="gtable" :items="items" :fields="columns" primary-key="id" id="mainTable" show-empty
          striped hover responsive class="position-relative" :per-page="perPage" filter-debounce="700"
          :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="isSortDirDesc"
          :sort-direction="sortDirection" :filter="searchQuery" :filter-included-fields="filterOn" :busy="isBusy"
          @filtered="onFiltered" :empty-text="$t('noMatchingRecordsFound')">

          <template #head(actions)>
            <span></span>
          </template>
          <template #table-colgroup="scope">
            <col v-for="field in scope.fields" :key="field.key" :style="field.style" />
          </template>

          <template v-for="field in columns" v-slot:[`cell(${field.key})`]="{ value }">
            <span v-if="field.isLocale" :key="field.key">
              {{ field.isLocale ? $t(value) : value }}
            </span>
            <span v-else-if="field.type === 'number'" :key="field.key">
              {{ value | fraction('number', currentBranch.decimalDigits) }}
            </span>
            <span v-else :key="field.key" v-html="value">
            </span>
          </template>
          <template #cell(isIncluded)="data">
            <slot name="isIncluded" v-bind:item="data.item" />
          </template>
          <template #cell(isReviewed)="data">
            <slot name="isReviewed" v-bind:item="data.item" />
          </template>
          <template #cell(updatedNAme)="data">
            <slot name="updatedNAme" v-bind:item="data.item" />
          </template>
          <template #cell(fullName)="data">
            <slot name="fullName" v-bind:item="data.item" />
          </template>
          <template #cell(actions)="data" v-if="hideActions === false">
            <slot name="actions" v-bind:item="data.item" />
            <div v-if="!slots.actions" class="text-nowrap">
              <b-button v-if="editButton.visiable" v-b-tooltip.hover.top="$t(editButton.text || 'edit')"
                variant="flat-primary" small size="sm"
                @click="() => { if (editButton.handler) editButton.handler(data.item); }">
                <feather-icon :id="`invoice-row-${data.item.id}-preview-icon`" :icon="editButton.icon || 'EditIcon'"
                  class="clickable" />
              </b-button>
              <b-button v-if="deleteButton.visiable" v-b-tooltip.hover.top="$t(deleteButton.text || 'edit')"
                variant="flat-danger" small size="sm"
                @click="() => { if (deleteButton.handler) deleteButton.handler(data.item); }">
                <feather-icon :icon="deleteButton.icon || 'TrashIcon'" stroke="red" class="clickable danger"
                  :id="`invoice-row-${data.item.id}-delete-icon`" />
              </b-button>
            </div>
          </template>
          <template v-for="field in columns" #[`foot(${field.key})`]>
            {{ typeof field.footer === 'function' ? field.footer() : '' }}
          </template>
        </b-table>
      </b-col>
      <div v-html="template" id="printPdf"></div>
    </b-row>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
<script src="@/pages/Shared/html2canvas.js"></script>
<script>
export default {
  props: {
    items: {
      type: [Array, Function],
      default: () => [],
    },
    hideOptions: {
      type: Boolean,
      default: false,
    },
    hideSearch: {
      type: Boolean,
      default: false,
    },
    isBusy: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    totalRows: {
      type: Number,
      default: 0
    }
  },
  emits: ['on-edit', 'on-delete', 'on-view', 'on-create'],
  setup(props, context) {
    let { attrs } = context;

    const {
      perPage,
      sortDirection,
      isSortDirDesc,
      currentPage,
      sortBy,
      createLabel,
      editButton,
      deleteButton,
      noAction,
      createButton,
      excelButton,
      pdfButton,
      searchInput,
      rowClass,
    } = attrs;

    const defaults = {
      perPage: perPage || 25,
      sortDirection: sortDirection || 'asc',
      isSortDirDesc: isSortDirDesc || '',
      currentPage: currentPage || 1,
      sortBy: sortBy || '',
      createLabel: createLabel || '',
      noAction: noAction || false,
      editButton: editButton || {
        visiable: true,
        icon: 'EditIcon',
        text: '',
        handler: '',
      },
      deleteButton: deleteButton || {
        visiable: true,
        icon: '',
        text: '',
        handler: '',
      },
      createButton: createButton || {
        visiable: true,
        icon: '',
        text: '',
        handler: '',
      },
      excelButton: excelButton || {
        visiable: true,
        icon: '',
        text: '',
        handler: '',
      },
      pdfButton: pdfButton || {
        visiable: true,
        icon: '',
        text: '',
        handler: '',
      },
      searchInput: searchInput || {
        visiable: true,
        icon: '',
        text: '',
        handler: '',
      },
      slots: context.slots,
      rowClass,
    };

    attrs = Object.entries(attrs).reduce((obj, val) => {
      /* eslint-disable prefer-destructuring */
      if ([...Object.keys(props), ...Object.keys(defaults)].indexOf(val[0]) === -1) obj[val[0]] = val[1];
      return obj;
    }, {});

    return defaults;
  },
  data() {
    return {
      item: '',
      searchQuery: '',
      filterOn: [],
      itemsArray: [],
      template: '',
      hideActions: false
    };
  },
  mounted() {
    // this.$refs.gtable.$slots = { ...this.$refs.gtable.$slots, ...this.slots };
    this.columns.forEach((res) => {
     res.field = res.key
    });
  },
  methods: {
    hide() {
      this.hideActions = true
    },
    pdfExport(name) {
      html2canvas(document.getElementById('mainTable')).then(function(canvas){
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF('p', 'mm');
      var position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
          doc.save(`${name}.pdf`);
      });
    },
    printDocument() {
      this.hide()
        setTimeout(() => {this.pdfExport(this.$route.name)
        this.hideActions = false
        }, 500);

    },
    refreshTable() {
      this.$refs.gtable.refresh();
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style>
.table.b-table th {
  word-wrap: normal;
  letter-spacing: normal;
  text-align: center;
}

@media (max-width: 768px) {
  .list-buttons {
    margin-top: 1.5rem;
  }
}

.footer-info div label {
  margin-top: 5px;
}
</style>
