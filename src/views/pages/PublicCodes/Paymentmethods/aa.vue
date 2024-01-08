<template>
  <b-card>
    <g-table
      ref="discount-table"
      :items="items"
      :columns="tableColumns"
      :noAction="true"
      perPage="25"
      :totalRows="totalRows"
      :createButton="{ visiable: true , permission: 'addPaymentMethods'}"
      :searchInput="{ visiable: true }"
      @on-create="
        (v) => {
          openModal({ englishName: '' });
        }
      "
    >
      <template #actions="{ item }">
        <div class="text-nowrap">
          <b-button
            v-permission="'editPaymentMethods'"
            v-b-tooltip.hover.top="$t('preview')"
            data-action-type="preview"
            variant="custom"
            class="btn-icon"
            size="sm"
            @click="openModal(item)"
          >
            <feather-icon
              :id="`invoice-row-${item.id}-prev-icon`"
              icon="EyeIcon"
              class="mx-25 clickable"
              :hidden="true"
            />
          </b-button>
          <b-button
            v-permission="'editPaymentMethods'"
            v-b-tooltip.hover.top="$t('edit')"
            data-action-type="edit"
            variant="custom"
            class="btn-icon"
            size="sm"
            @click="openModal(item)"
          >
            <feather-icon
              :id="`invoice-row-${item.id}-preview-icon`"
              icon="EditIcon"
              class="mx-25 clickable"
            />
          </b-button>
          <b-button
            v-b-tooltip.hover.top="$t('delete')"
            v-permission="'deletePaymentMethods'"
            data-action-type="delete"
            variant="flat-danger"
            class="btn-icon"
            size="sm"
            @click="remove(item)"
          >
            <feather-icon
              :id="`invoice-row-${item.id}-delete-icon`"
              icon="TrashIcon"
              stroke="red"
              class="danger"
            />
          </b-button>
        </div>
      </template>
    </g-table>
    <b-sidebar
      id="sidebar-edit"
      ref="sidebar"
      no-close-on-backdrop
      sidebar-class="sidebar-lg"
      bg-variant="white"
      shadow
      backdrop
      no-header
      left
      @hidden="
        () => {
          selectedItem = {};
        }
      "
    >
      <template #default>
        <div
          class="d-flex justify-content-between bg-primary align-items-center content-sidebar-header px-2 py-1"
        >
          <h5 class="mb-0 text-white">
            {{
              selectedItem.id > 0
                ? $t("editPaymentMethod")
                : $t("addPaymentMethod")
            }}
          </h5>
        </div>
        <b-card>
          <g-form @submit="save">
            <b-row>
              <b-col
                v-if="selectedItem.id > 0"
                md="12"
              >
                <label
                  style="font-size: 14px; margin-bottom: 7px"
                  for="customer"
                >
                  {{ $t("code") }}
                </label>
                <!-- code  -->
                <g-field
                  id="code"
                  type="number"
                  v-model="selectedItem.code"
                  name="code"
                  disabled
                />
              </b-col>

              <b-col md="12">
                <!-- arabicName  -->
                <g-field
                  id="arabicName"
                  ref="arabicName"
                  rules="required"
                  v-model="selectedItem.arabicName"
                  name="arabicName"
                  label-text="arabicName"
                />
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <g-field
                  id="englishName"
                  ref="englishName"
                  v-model="selectedItem.englishName"
                  name="englishName"
                  label-text="englishName"
                />
              </b-col>
              <b-col md="12">
                <b-form-group>
                  <g-field
                  v-model="selectedItem.bankId"
                    :dir="isRight ? 'rtl' : 'ltr'"
                    label-text="bankName"
                    rules="required"
                    field="select"
                    name="bankName"
                    :options="banks"
                    label="arabicName"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
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
              <!-- notes -->
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
              <b-col
                cols="12"
                class="d-flex justify-content-end"
              >
                <b-button
                  v-permission="$route.meta.permission"
                  class="mx-1"
                  type="submit"
                  variant="primary"
                  data-action-type="save"
                >
                  {{ $t("save") }}
                </b-button>
                <b-button
                  class="mx-1"
                  variant="secondary"
                  @click="closeModal"
                >
                  {{ $t("Close") }}
                </b-button>
              </b-col>
            </b-row>
          </g-form>
        </b-card>
      </template>
    </b-sidebar>
  </b-card>
</template>

<script>
import GTable from '@/pages/Shared/Table.vue';

export default {
  components: {
    GTable,
  },
  data() {
    return {
      items: [],
      totalRows: 0,
      banks: [],
      currentPage: 1,
      perPage: 25,
      selectedItem: {},
      modal: false,
    };
  },
  computed: {
    tableColumns() {
      return [
        { key: 'code', label: this.$t('code'), sortable: true },
        { key: 'arabicName', label: this.$t('discount'), sortable: true },
        { key: 'notes', label: this.$t('notes'), sortable: true },
        { key: 'actions' },
      ];
    },
  },
  mounted() {
    this.getBanks();
    this.getItems();
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    getBanks() {
      this.get({ url: 'banks' }).then((data) => {
        this.banks = data;
      });
    },
    getItems() {
      this.get({ url: 'PaymentMethods' }).then((data) => {
        this.items = data;
      });
    },
    save() {
      if (this.selectedItem.id > 0) {
        this.update({
          url: 'PaymentMethods',
          data: this.selectedItem,
          id: this.selectedItem.id,
        }).then(() => {
          this.closeModal();
          this.doneAlert({ text: this.$t('updatedSuccessfully') });
          this.getItems();
        });
      } else {
        this.create({ url: 'PaymentMethods', data: this.selectedItem }).then(() => {
          this.closeModal();
          this.doneAlert({ text: this.$t('savedSuccessfully') });
          this.getItems();
        });
      }
    },
    remove(item) {
      this.confirmAction(
        {
          text: this.$t('areYouSureYouWantToDelete'),
        },
        () => {
          this.delete({ url: 'PaymentMethods', id: item.id }).then(() => {
            this.doneAlert({ text: this.$t('deletedSuccessfully') });
            this.getItems();
          });
        }
      );
    },
    closeModal() {
      this.$refs.sidebar.hide();
    },
    openModal(item) {
      this.selectedItem = { ...item };
      this.$root.$emit('bv::toggle::collapse', 'sidebar-edit')
    },
  },
};
</script>

<style></style>
