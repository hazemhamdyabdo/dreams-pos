<template>
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />
        <!-- /add -->
        <div class="card">
          <div class="card-body">
            <b-form class="was-validated" @submit="save()">
              <b-row>
                <b-col md="4">
                  <gfield
                    label-text="Code"
                    ref="code"
                    name="code"
                    id="code"
                    v-model="selectedItem.code"
                    rules="required"
                  />
                </b-col>
                <b-col md="4">
                  <gfield
                    :label-text="$t('arabicName')"
                    ref="code"
                    name="code"
                    id="code"
                    class="form-control"
                    v-model="selectedItem.arabicName"
                    rules="required"
                  />

                  <div class="invalid-feedback">
                    {{ $t("NameIsRequired") }}
                  </div>
                </b-col>
                <b-col md="4">
                  <gfield
                    id="englishName"
                    ref="englishName"
                    v-model="selectedItem.englishName"
                    name="englishName"
                    label-text="englishName"
                  />
                </b-col>
              </b-row>
              <b-row>
                <!-- accountNumber -->
                <b-col md="4">
                  <gfield
                    id="accountNumber"
                    v-model="selectedItem.accountNumber"
                    name="accountNumber"
                    label-text="accountNumber"
                  />
                </b-col>
                <!-- iban  -->
                <b-col md="4">
                  <gfield
                    id="iban"
                    v-model="selectedItem.iban"
                    label-text="iban"
                    name="iban"
                    rules="required"
                  />
                </b-col>
                <b-col md="2">
                  <label
                    style="font-size: 14px; margin-bottom: 7px"
                    for="general"
                  >
                    {{ $t("general") }}
                  </label>
                  <b-form-group>
                    <b-form-checkbox
                      v-model="selectedItem.isShared"
                      class="mr-0 mt-50"
                      name="is-rtl"
                      inline
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="12">
                  <b-form-group>
                    <label
                      style="font-size: 14px; margin-bottom: 7px"
                      for="customer"
                    >
                      {{ $t("notes") }}
                    </label>
                    <b-form-textarea
                      id="textarea"
                      v-model="selectedItem.notes"
                      label="Notes"
                      rows="3"
                      max-rows="6"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="d-flex justify-content-end">
                  <b-button
                    v-permission="$route.meta.permission"
                    class="mx-2"
                    type="submit"
                    variant="primary"
                    data-action-type="save"
                  >
                    {{ $t("save") }}
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    id: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      selectedItem: {
        code: "",
        arabicName: "",
      },
      totalRows: 0,
      currentPage: 1,
      perPage: 25,
      searchQuery: "",
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      items: [],
      title: "Product Add",
      title1: "Create new product",
      Category: ["Choose Category", "Computers"],
      SubCategory: ["Choose Sub Category", "Fruits"],
      Brand: ["Choose Brand", "Brand"],
      Unit: ["Choose Unit", "Unit"],
      Tax: ["Choose Tax", "2%"],
      Percentage: ["Percentage", "10%", "20%"],
      Closed: ["Closed", "Open"],
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id > 0) {
      this.getSelectedBank();
    }
  },
  methods: {
    save() {
      this.selectedItem.branchId = this.branchId;
      if (!this.selectedItem.englishName) {
        this.selectedItem.englishName = this.selectedItem.arabicName;
      }
      if (this.selectedItem.id > 0) {
        this.update({
          url: "Banks",
          data: this.selectedItem,
          id: this.selectedItem.id,
        }).then(() => {
          this.doneAlert({ text: this.$t("updatedSuccessfully") });
          this.$router.push({ name: "banks" });
        });
      } else {
        this.create({
          url: "Banks",
          data: this.selectedItem,
        }).then(() => {
          this.doneAlert({ text: this.$t("savedSuccessfully") });
          this.$router.push({ name: "banks" });
        });
      }
    },
    getSelectedBank() {
      this.get({ url: "Banks", id: this.id }).then((data) => {
        this.selectedItem = data;
      });
    },
  },
};
</script>
