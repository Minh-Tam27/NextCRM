<template>
  <div id="app">
    <div v-if="showModalDescriptionReject">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Lý do từ chối
                  </h5>
                  <button
                    type="button"
                    class="close"
                    @click="close()"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-center">
                  <form>
                    <div class="form-group pos-relative">
                      <textarea
                        v-model="dataInsert.reasonRejected"
                        class="form-control f12"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-light" data-dismiss="modal">Xác nhận</button> -->
                  <button
                    :disabled="
                      !dataInsert.reasonRejected ||
                      !dataInsert.reasonRejected.trim()
                    "
                    @click="submitRejectContract()"
                    class="btn btn-success"
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showModalDescriptionReject'],

  data () {
    return {
      dataInsert: {}
    }
  },

  methods: {
    submitRejectContract () {
      this.$emit('submitReject', this.dataInsert)
    },

    close () {
      this.$emit('closeModal')
    }
  }
}
 
</script>

<style scoped>
</style>
